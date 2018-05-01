var Animation = {
	// Fill the grids with units
	fillGrid: function(grid, orientation) {
		// If grid is left-right oriented fill it with left-right units
		if (orientation == 'left' || orientation == 'right') {
			for (i = 1; i <= 1000; i++) {
				var unit = document.createElement('div');
				unit.classList.add('unit-lr');
				grid.appendChild(unit);
				// Add unit to left or right grid list
				if (orientation == 'left') {
					Data.unitsLeft.push(unit)
				};
				if (orientation == 'right') {
					Data.unitsRight.push(unit)
				}
			}
		};
		
		// If grid is top-bottom oriented fill it with top-bottom units
		if (orientation == 'top' || orientation == 'bottom') {
			for (i = 1; i <= 800; i++) {
				var unit = document.createElement('div');
				unit.classList.add('unit-tb');
				grid.appendChild(unit);
				// Add unit to left or right grid list
				if (orientation == 'top') {
					Data.unitsTop.push(unit)
				};
				if (orientation == 'bottom') {
					Data.unitsBottom.push(unit)
				}
			}
		}
	},
	
	// Create a background grid
	createBackgroundGrid: function() {
		var gridTopBottom = document.getElementsByClassName('grid-top-bottom');
		var gridLeftRight = document.getElementsByClassName('grid-left-right');
		Animation.fillGrid(gridLeftRight[0], 'left');
		Animation.fillGrid(gridLeftRight[1], 'right');
		Animation.fillGrid(gridTopBottom[0], 'top');
		Animation.fillGrid(gridTopBottom[1], 'bottom');
		// Right grid has a strange behaviour, so easiest way to fix it is just to manually adjust a styles
		gridLeftRight[1].setAttribute('style', 'position: relative;'+
												'bottom: 88.2%;'+
												'right: 4px;'+
												'z-index: -1;')
	},
	
	// Create animational unit of background - the 'drop'
	initDrop: function(unitsList, start, time) {
		// Set the head of the drop
		var i = start;
		var head = unitsList[i];
		var first, second, third, fourth, fifth, sixth, seventh;
		// Check orientation of the grid
		if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
			var last = unitsList[i-70];
		};
		if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
			var last = unitsList[i-560];
		};
		setTimeout(function() {
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time);
		// After half second move the head, add one unit to the drop
		setTimeout(function() {
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+100);
		// After another half second move the head, add one more unit to the drop
		setTimeout(function() {
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+200);
		// One more unit
		setTimeout(function() {
			third = second;
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (third != undefined) {
				third.setAttribute('style', 'background-color: #f9f9f9')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+300);
		// And one more
		setTimeout(function() {
			fourth = third;
			third = second;
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (third != undefined) {
				third.setAttribute('style', 'background-color: #f9f9f9')
			};
			if (fourth != undefined) {
				fourth.setAttribute('style', 'background-color: #f7f7f7')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+400);
		// Another one. More is better
		setTimeout(function() {
			fifth = fourth;
			fourth = third;
			third = second;
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (third != undefined) {
				third.setAttribute('style', 'background-color: #f9f9f9')
			};
			if (fourth != undefined) {
				fourth.setAttribute('style', 'background-color: #f7f7f7')
			};
			if (fifth != undefined) {
				fifth.setAttribute('style', 'background-color: #f5f5f5')
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+500);
		// Never enough
		setTimeout(function() {
			sixth = fifth;
			fifth = fourth;
			fourth = third;
			third = second;
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (third != undefined) {
				third.setAttribute('style', 'background-color: #f9f9f9')
			};
			if (fourth != undefined) {
				fourth.setAttribute('style', 'background-color: #f7f7f7')
			};
			if (fifth != undefined) {
				fifth.setAttribute('style', 'background-color: #f5f5f5')
			};
			if (sixth != undefined) {
				sixth.setAttribute('style', 'background-color: #f3f3f3');
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+600);
		// And the last one. Seven in total
		setTimeout(function() {
			seventh = sixth;
			sixth = fifth;
			fifth = fourth;
			fourth = third;
			third = second;
			second = first;
			first = head;
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				i = i + 10;
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				i = i + 80;
			};
			head = unitsList[i];
			if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
				var last = unitsList[i-70];
			};
			if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
				var last = unitsList[i-560];
			};
			if (head != undefined) {
				head.setAttribute('style', 'background-color: #ffffff')
			};
			if (first != undefined) {
				first.setAttribute('style', 'background-color: #fdfdfd')
			};
			if (second != undefined) {
				second.setAttribute('style', 'background-color: #fbfbfb')
			};
			if (third != undefined) {
				third.setAttribute('style', 'background-color: #f9f9f9')
			};
			if (fourth != undefined) {
				fourth.setAttribute('style', 'background-color: #f7f7f7')
			};
			if (fifth != undefined) {
				fifth.setAttribute('style', 'background-color: #f5f5f5')
			};
			if (sixth != undefined) {
				sixth.setAttribute('style', 'background-color: #f3f3f3');
			};
			if (seventh != undefined) {
				seventh.setAttribute('style', 'background-color: #f1f1f1');
			};
			if (last != undefined) {
				last.setAttribute('style', 'background-color: #f0f0f0')
			}
		}, time+700);
	},
	
	// After drop is fully initialized continue to move it
	moveDrop: function(unitsList, start) {
		var time = 0;
		if (unitsList == Data.unitsTop || unitsList == Data.unitsBottom) {
			for (i = start; i <= 800; i += 560) {
				Animation.initDrop(unitsList, i, time);
				time += 700
			}			
		};
		if (unitsList == Data.unitsLeft || unitsList == Data.unitsRight) {
			for (i = start; i <= 1000; i += 70) {
				Animation.initDrop(unitsList, i, time);
				time += 700
			}			
		}
	},
	
	// Initialize drops in random places
	cascade: function() {
		var units = [Data.unitsLeft, Data.unitsRight, Data.unitsTop, Data.unitsBottom];
		// Initialize for top grid and bottom grid
		setInterval(function() {
			var numTopBottom = Math.floor(Math.random() * 81);
			var unitsTopBottom = units[Math.floor(Math.random() * 2)+2];
			Animation.moveDrop(unitsTopBottom, numTopBottom);
		}, 100);
		// Initialize for left grid and right grid
		setInterval(function() {
			var numLeftRight = Math.floor(Math.random() * 11);
			var unitsLeftRight = units[Math.floor(Math.random() * 2)];
			Animation.moveDrop(unitsLeftRight, numLeftRight);
			}, 400)				
	},
	
	// Declare function to move project one step left
	moveLeft: function(project, i, time) {
		setTimeout(function() {
			project.style.left = i + 'em'
		}, time)
	},
	
	// Animate projects when they first appear on page
	appearProject: function(project, interval) {
		setTimeout(function() {
			var time = 1;
			for (i=101; i>0; i--) {
				Animation.moveLeft(project, i-1, time);
				time = time + 1;
			}
		}, interval)		
	},
	
	// Animation to gradually increase or decrease the size of project
	changeSize: function(template, height, f, time, shade) {
		setTimeout(function() {
			template.style.height = height * f + '%';
			template.style.boxShadow = '0px 0px 2px 5px' + shade
		}, time)
	},
	
	// Animation when mouse is over the project element
	mouseover: function(template, height) {
		var time = 8;
		// Incrementing factor
		var f = 1.01;
		var shade;
		for (i = 0; i < 10; i++) {
			shade = Data.shades[i];
			Animation.changeSize(template, height, f, time, shade);
			f = f + 0.01;
			time = time + 8
		};
	},
	
	mouseout: function(template, height) {
		var time = 8;
		// Decrementing factor
		var f = 1.09;
		var shade;
		for (i = 0; i < 10; i++) {
			shade = Data.shades[9-i];
			Animation.changeSize(template, height, f, time, shade);
			f = f - 0.01;
			time = time + 8
		}
	},
	
	// Define one step of text area shrinking
	shrinkStep: function(elem, width, time) {
		setTimeout(function() {
			elem.style.width = width + '%'
		}, time)
	},

	// Shrink text area when project is selected
	shrinkText: function() {
		var textArea = document.getElementById('intro');
		textArea.style.display = 'inline-block';
		var width = 100;
		var time = 0.1;
		while (width >= 43.05) {
			Animation.shrinkStep(textArea, width, time);
			width = width - 0.05;
			time = time + 0.1
		}
	},
	
	// Define one step function to appear the video
	enlarge: function(videoFrame,h, w, time) {
		setTimeout(function() {
			videoFrame.style.height = h + '%';
			videoFrame.style.width = w + '%';
		}, time)
	},
	// Gradually appear the video frame
	appearVideo: function() {
		var videoFrame = document.getElementById('frame');
		// Minimize video frame if video is already playing
		videoFrame.style.height = '1%';
		videoFrame.style.width = '1%';
		videoFrame.style.display = 'inline-block';
		var height = 0.05;
		var width = 0.05;
		var time = 0.1;
		while (height <= 60) {
			Animation.enlarge(videoFrame, height, width, time)
			height = height + 0.05;	
			time = time + 0.1;
			if (width <= 50) {
				width = width + 0.05;
			}
		}
	},
	
	// Function for playing a video when project is selected
	playVideo: function(project) {
		var videoFrame = document.getElementById('frame');
		// Check if frame is already displayed
		var display = window.getComputedStyle(videoFrame, null).getPropertyValue('display');
		if (display == 'none') {
			setTimeout(function() {
				Animation.appearVideo()
			}, 100);
			var video = document.createElement('source');
			video.setAttribute('id', 'video');
			video.setAttribute('src', project.video);
			video.setAttribute('type', 'video/webm');
			videoFrame.appendChild(video);
		} else {
			// Cahnge source of currently playing video
			videoFrame.pause()
			var video = document.getElementById('video');
			video.setAttribute('src', project.video);
		}
		videoFrame.load();
		videoFrame.play()
	},
	
	// Shrink projects list and text area
	shrink: function() {
		var textArea = document.getElementById('intro');
		var projectsList = document.getElementById('projects-list');
		var projects = document.getElementsByClassName('project');
		Animation.shrinkText();
		Data.projectsList.forEach(function(project, i) {
			var big = Array.from(projects)[i]
			var small = big.cloneNode(true);
			small.style.height = '25%';
			small.style.boxShadow = 'none';
			projectsList.replaceChild(small, big);
			// Reassign event listeners for projects
			Functions.assignListeners(small, project, 25)
		})
	}
}