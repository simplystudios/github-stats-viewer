const Button = document.getElementById('searchbutton')
const Uiid = document.getElementById('search')

const Search = () => {
         username = Uiid.value;
         console.log(username)
         if (username > ''){
            document.getElementById("stat").src = `https://github-readme-stats.vercel.app/api?username=${username}&theme=react&show_icons=true&hide_border=true&count_private=true`;
            document.getElementById("streak").src = `https://streak-stats.demolab.com?user=${username}&theme=react&show_icons=true&hide_border=true&count_private=true`;
            document.getElementById("languse").src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=react&show_icons=true&hide_border=true&layout=compact`;
            document.getElementById("name").textContent = `Stats of ${username}`
         }
        else{
            document.getElementById("name").textContent = 'Type A Username ex : simplystudios'
        }
}

Button.addEventListener("click",Search())
