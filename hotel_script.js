const contact = document.getElementById('contact_main');
const contact_list = document.getElementById('contact');
const currency = document.getElementById('currency_main');
const currency_list = document.getElementById('currency');
const account = document.getElementById('account_main');
const account_list = document.getElementById('account');

contact.addEventListener('click', function(e){
    e.stopPropagation();
    contact_list.classList.toggle('show');
}   
); 
currency.addEventListener('click', function(e){
    e.stopPropagation();
    currency_list.classList.toggle('show');   
}
);

document.getElementById('naira').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/nigeria-flag.svg";
    document.getElementById('currency_symbol').innerHTML = ' &#8358;';
});

document.getElementById('euro').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/euro.png";
    document.getElementById('currency_symbol').innerHTML = ' &#8364;';
});

document.getElementById('dollar').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/dollar.png";
    document.getElementById('currency_symbol').innerHTML = ' $';
});

document.getElementById('pound').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/pounds.png"; 
    document.getElementById('currency_symbol').innerHTML = ' &#163;';
});

document.getElementById('shilling').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/shilling.png"; 
    document.getElementById('currency_symbol').innerHTML = ' KSh';
});

document.getElementById('rupee').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/rupee.png";
    document.getElementById('currency_symbol').innerHTML = ' &#8377;';
});

document.getElementById('rand').addEventListener('click', function(e){
    e.stopPropagation();
    document.getElementById('currency_flag').src = "assets/rand.jpeg";
    document.getElementById('currency_symbol').innerHTML = ' R';
});

account.addEventListener('click', function(e){
    e.stopPropagation();
    account_list.classList.toggle('show');   
}
);

// close both when clicking outside
document.addEventListener('click', function () {
    contact_list.classList.remove('show');
    currency_list.classList.remove('show');
    account_list.classList.remove('show');
});

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

flatpickr('#checks', {
    mode: "range",
    dateFormat: "d-m-Y",
    defaultDate: [today, tomorrow],
    minDate: "today",
    position: "below"
});

const search_bar = document.getElementById('search');
const topof_bar = search_bar.getBoundingClientRect().top + window.scrollY;

search_bar.addEventListener('DOMContentLoaded', search_bar.classList.add('is-norm'));

window.addEventListener('scroll', function (){

    if (window.scrollY >= topof_bar)
    {
        search_bar.classList.remove('is-norm');
        search_bar.classList.add('is-fixed');
    }
    else
    {
        search_bar.classList.remove('is-fixed');
        search_bar.classList.add('is-norm');
    }
});



/*For the button feature in suggested*/
    document.getElementById('lagos').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('lagosh').style.color = 'white';
    }
    );
    document.getElementById('lagos').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('lagosh').style.color = '#00aeff';
    });

    document.getElementById('abuja').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('abujah').style.color = 'white';
    }
    );
    document.getElementById('abuja').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('abujah').style.color = '#00aeff';
    });

    document.getElementById('PH').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('PHh').style.color = 'white';
    }
    );
    document.getElementById('PH').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('PHh').style.color = '#00aeff';
    });

    document.getElementById('kaduna').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('kadunah').style.color = 'white';
    }
    );
    document.getElementById('kaduna').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('kadunah').style.color = '#00aeff';
    });

    document.getElementById('uyo').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('uyoh').style.color = 'white';
    }
    );
    document.getElementById('uyo').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('uyoh').style.color = '#00aeff';
    });


    document.getElementById('ibadan').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        document.getElementById('ibadanh').style.color = 'white';
    }
    );
    document.getElementById('ibadan').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'white';
        this.style.color = 'black';
        document.getElementById('ibadanh').style.color = '#00aeff';
    });

/**/



/*For the button feature in popular*/
    document.getElementById('lagbutton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('lagbutton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });


    document.getElementById('abujabutton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('abujabutton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });


    document.getElementById('calbutton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('calbutton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });


    document.getElementById('PHbutton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('PHbutton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });


    document.getElementById('owerributton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('owerributton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });


    document.getElementById('uyobutton').addEventListener('mouseover', function (){
        this.style.backgroundColor = '#00aeff';
        this.style.color = 'white';
        this.style.borderColor = '#00aeff';
    }
    );
    document.getElementById('uyobutton').addEventListener('mouseout', function (){
        this.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.style.color = 'white';
        this.style.borderColor = 'white';
    });
/* */

document.getElementById('unlock').addEventListener('click', function (){
    document.getElementById('offer').scrollIntoView({behavior: 'smooth', block: 'center'});
    document.getElementById('suscribe').focus();
});