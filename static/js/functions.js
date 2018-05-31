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
				Animation.changeText(project);
				Animation.shrink();
				Functions.playVideo(project)
			})
		} else {
			template.addEventListener('click', function() {
				Animation.changeText(project);
				Functions.playVideo(project)
			})
		}
	},
	
	// Assign event listeners for buttons
	assignButtonsEvents: function(project) {
		var table = document.getElementById('table');
		var buttons = document.getElementsByClassName('button');
		var win = document.getElementById('window');
		Array.from(buttons).forEach(function(oldBtn) {
			var newBtn = oldBtn.cloneNode(true);
			newBtn.addEventListener('mouseover', function() {
				newBtn.style.backgroundColor = '#fff'
			});
			newBtn.addEventListener('mouseout', function() {
				newBtn.style.backgroundColor = '#eaeaea'
			});
			if (oldBtn == buttons[0]) {
				newBtn.addEventListener('click', function() {
					Animation.showFrame(project, win, buttons[2])
				})
			};
			if (oldBtn == buttons[1]){
				newBtn.addEventListener('click', function() {
					window.open(project.url)
				})
			};
			if (oldBtn == buttons[2]){
				newBtn.addEventListener('click', function() {
					Animation.hideFrame(win, newBtn)
				})
			};
			table.replaceChild(newBtn, oldBtn);
		})
	},
	
	// Function for playing a video when project is selected
	playVideo: function(project) {
		var videoFrame = document.getElementById('frame');
		// Check if frame is already displayed
		var display = window.getComputedStyle(videoFrame, null).getPropertyValue('display');
		if (display == 'none') {
			setTimeout(function() {
				Animation.appearVideo()
			}, 400);
			var video = document.createElement('source');
			video.setAttribute('id', 'video');
			video.setAttribute('src', project.video);
			video.setAttribute('type', 'video/mp4');
			videoFrame.appendChild(video);
		} else {
			// Cahnge source of currently playing video
			videoFrame.pause()
			Animation.disappear(videoFrame, 300, 30);
			var video = document.getElementById('video');
			video.setAttribute('src', project.video);
			Animation.appear(videoFrame, 300, 30)
		}
		videoFrame.load();
		videoFrame.play();
		// Change links of buttons
		Functions.assignButtonsEvents(project)
	},
}