let users = ['Ali', 'Jhon', 'Doe', 'zeeshan','Sajid','Arshad'];
	let ul = document.querySelector('ul');
	let app = {
		new_user : {
			text : "",
			handleChange : (e) => {
				app.new_user.text = e.target.value;
			},
			handleSubmit : (e) => {
				e.preventDefault();
				if (app.new_user.text) {
					users.push(app.new_user.text);
					app.render();
					app.new_user.text = "";
					e.target.querySelector('input').value = "";
				}
			}
		},
		search_text : "",
		handleChange(e) {
			app.search_text = e.target.value;
			this.render();
		},
		renderRemoveButton (tag, index) {
			let a = document.createElement('a');
			a.addEventListener('click', () => {
				users.splice(index, 1);
				app.render();
			});
			a.classList.add('close-button');
			a.innerHTML = "&times;";
			tag.appendChild(a);
			return tag;
		},
		render : () => {
			ul.innerHTML = "";
			users.map((item, index) => {
				if (app.search_text) {
					if (item.toLowerCase() == app.search_text.toLowerCase()) {
						let currentUser = document.createElement("li");
						currentUser.innerHTML = item;
						currentUser = app.renderRemoveButton(currentUser, index)
						ul.appendChild(currentUser);
					}
				}
					else{
						let currentUser = document.createElement("li");
						currentUser.innerHTML = item;
						currentUser = app.renderRemoveButton(currentUser, index)
						ul.appendChild(currentUser);
				}
			})
		},
		mounted : () => {
			app.render()
		}
	};
	app.mounted();