let i = 0;

while (i < 50)
{
    i++;
    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log('JavaScript');
    } else if (i % 3 == 0) {
        console.log('Java');
    } else if (i % 5 == 0) {
        console.log('Script');
    } else {
    console.log(i);
    }
}