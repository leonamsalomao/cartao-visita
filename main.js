const link = {
  github: 'leonamsalomao',
  linkedin: 'in/leonamsalomao',
  Facebook: 'leonamsalomao',
  Instagram: 'leo_salomao7',
  Twitter: 'LeonamSalomao'
}

function socialMediaLINK() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${link[social]}`
  }
}
socialMediaLINK()

function getUserGitHub() {
  const url = `https://api.github.com/users/${link.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      //   poderia usar apenas userName.textContent = data.name
      document.getElementById('userName').innerHTML = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login
    })
}

getUserGitHub()
