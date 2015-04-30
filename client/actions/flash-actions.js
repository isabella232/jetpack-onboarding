var AppDispatcher = require('../dispatcher/app-dispatcher'),
	JPSConstants = require('../constants/jetpack-start-constants');

module.exports = {
	notice: function(msg) {
		AppDispatcher.dispatch({
			actionType: JPSConstants.SET_FLASH,
			message: msg,
			severity: JPSConstants.FLASH_SEVERITY_NOTICE
		});
	},

	error: function(msg) {
		AppDispatcher.dispatch({
			actionType: JPSConstants.SET_FLASH,
			message: msg,
			severity: JPSConstants.FLASH_SEVERITY_ERROR
		});
	}
}