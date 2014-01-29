exports.viewProject = function(req, res) { 
	var inputName = req.params.name;
	res.render('project', {
		'projectName': inputName
	});
};