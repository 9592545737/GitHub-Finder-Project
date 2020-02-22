// Init GitHub
const github = new gitHub;

// Init UI
const ui = new UI;

// Get id
const searchUser = document.getElementById('searchUser');

// Add Event listener
searchUser.addEventListener('keyup', (e) => {
  // Get Text from search
  const userText = e.target.value;

  //If Else to check userText
  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          //Show Profile
          ui.showProfile(data.profile);
          // Show repos
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});