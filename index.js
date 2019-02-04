/**
 * Returns a fresh promise and its related resolve and reject functions.
 *
 * @returns {[Promise, function, function]}
 */
module.exports = function givePromise() {
	let resolvePromise;
	let rejectPromise;

	const promise = new Promise((resolve, reject) => {
		 resolvePromise = resolve;
		 rejectPromise = reject;
	});

	return [promise, resolvePromise, rejectPromise];
};
