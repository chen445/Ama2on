
export const percentage=(ratings)=>{
    let starCounts = {
        1:0,
        2:0,
        3:0, 
        4:0,
        5:0
    };
   
    ratings.forEach(rating=>{
        starCounts[rating]++;
    });

    let sum=0;
    Object.values(starCounts).forEach(count => {
        sum+=count
    });

    let starPercents = {}
    Object.keys(starCounts).forEach(star => {
        starPercents[star] =  (starCounts[star] * 1.0 / sum).toFixed(2);
    });

    return starPercents;
}
