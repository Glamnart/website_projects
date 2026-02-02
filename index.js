showStars(5);

function showStars(rows){
    for(let i = 1; i <= rows; i++)
    {
        for(let j = 0; j < i; j++)
            console.log('#');
    }
    return;
}