var Functions = {
	// Create a box element for each project
	createProjectTemplate: function(project) {
		var template = document.createElement('img');
		template.classList.add('project');
		template.setAttribute('src', project.img);
		// Animate boxes to interact with user
		Functions.assignListeners(template, project, 40)
		return template
	},
	
	// Fill projects list
	populateProjectsList: function() {
		var list = document.getElementById('projects-list');
		var interval = 250;
		Data.projectsList.forEach(function(project, i) {
			var template = Functions.createProjectTemplate(project);
			list.appendChild(template);
			// Add appearing animation
			Animation.appearProject(template, interval);
			interval = interval + 250
		})
	},
	
	// Change layout of the page when project first selected
	changeLayout: function(project) {
		Animation.shrink();
		Animation.playVideo(project)
	},
	
	// Assign event listeners to projects
	assignListeners: function(template, project, height) {
		template.addEventListener('mouseover', function(){
			Animation.mouseover(template, height)
		});
		template.addEventListener('mouseout', function() {
			Animation.mouseout(template, height)
		});
		// Change layout when project is clicked first time
		if (height == 40) {
			template.addEventListener('click', function() {
				Animation.shrink();
				Animation.playVideo(project)
			})
		} else {
			template.addEventListener('click', function() {
				Animation.playVideo(project)
			})
		}
	}
}