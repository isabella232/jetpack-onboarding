var React = require('react'),
	SiteActions = require('../actions/site-actions'),
	SiteStore = require('../stores/site-store');

var LayoutStep = React.createClass({

	getInitialState: function() {
		return {
			layout: SiteStore.getLayout()
		};
	},

	handleSetLayout: function( e ) {
		this.setState({ layout: jQuery(e.currentTarget).val() });
	},

	handleSubmit: function( e ) {
		e.preventDefault();
		SiteActions.setLayout(this.state.layout);
	},

	render: function() {
		return (
			<div className="welcome__section" id="welcome__layout">
				<h4>Pick a layout</h4>

				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="radio" name="site_layout" value="website" checked={this.state.layout === 'website'} onChange={this.handleSetLayout}/> Website
						<p className="description">Choose this one if you're creating a site for your company that will rarely change</p>
					</label>
					<br/>
					<label>
						<input type="radio" name="site_layout" value="site-blog" checked={this.state.layout === 'site-blog'} onChange={this.handleSetLayout}/> Website with a blog
						<p className="description">Choose this one if you're creating a company or personal site that will also have a blog or news section</p>
					</label>
					<br/>
					<label>
						<input type="radio" name="site_layout" value="blog" checked={this.state.layout === 'blog'} onChange={this.handleSetLayout}/> Just a blog
						<p className="description">Choose this one if you want a site that will constantly show new content (articles, photos, videos, etc.)</p>
					</label>

					<p className="submit">
						<input type="submit" name="save" className="button button-primary button-large" value="Save"/>
						<a className="skip" href="#">Skip this step</a>
					</p>
				</form>
			</div>
		);
	}
});

module.exports = LayoutStep;