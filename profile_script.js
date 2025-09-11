document.getElementById('about').addEventListener('click', function(){
document.getElementById('more').innerHTML = "Name:<br style = 'margin-top: 10pt;'>Favour Bright<br>Nationality:<br style = 'margin-top: 10pt;'>Nigerian<br>Hobbies:<br style = 'margin-top: 10pt;'>Swimming, Basketball, Spoken Word Poetry, Music, Reading<br>Role Models:<br style = 'margin-top: 10pt;'>Michelle Obama, My mum, Bang Chan, Lebron James, Adesua Etomi Wellington<br>Life Quote:<br style = 'margin-top: 10pt;'>If you judge a fish by its ability to climb a tree it will forever live its life thinking it's stupid.";
});
document.getElementById('works').addEventListener('click', function(){
document.getElementById('more').innerHTML = "Completed projects in C language <br>Go to <a href='https://github.com/Glamnart/c-boilerplate.git'>Repository</a> <div><br>Analyze.c (An encryption program) <br style = 'margin-top: 10pt;'>Contact.c (A contact book) <br style = 'margin-top: 10pt;'>Contributions_Manager.c (An ajọ system manager) <br style = 'margin-top: 10pt;'>Gamelogic.c (A coin catch game simulation) <br style = 'margin-top: 10pt;'>Image_processor.c (A mini photoshop for bmp pictures) <br style = 'margin-top: 10pt;'>Numbers.c (A bubble sort and binary search program) <br style = 'margin-top: 10pt;'>Riddle_Time.c (A mini riddle game) <br style = 'margin-top: 10pt;'>TaskManager.c (A mini task manager),<br style = 'margin-top: 10pt;'></div>";
});
document.getElementById('contact').addEventListener('click', function(){
document.getElementById('more').innerHTML = "Email:<br style = 'margin-top: 10pt;'>favournchess192@gmail.com <br>Phone Number:<br style = 'margin-top: 10pt;'>+234 916 721 9622<br>LinkedIn Profile<br style = 'margin-top: 10pt;'><a href='https://www.linkedin.com/in/favour-b-35b097330/'>Favour's LinkedIn</a>";
});

document.querySelector('form').addEventListener('submit', function(){
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    if(name == '' || phone == '' || email == '')
        alert('You have to complete all fields correctly'); 
    else
    {
        alert('Hello, ' + name + '! Nice to meet you.');
    }
});


