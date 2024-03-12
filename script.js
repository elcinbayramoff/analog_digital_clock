document.addEventListener('DOMContentLoaded', function () {
    const seconds = Array.from({ length: 6 }, (_, index) => document.getElementById(`number${index + 1}`));
    const minutes = Array.from({ length: 5 }, (_, index1) => document.getElementById(`min${index1 + 1}`));
    const hours = Array.from({ length: 4 }, (_, index2) => document.getElementById(`h${index2 + 1}`));
    const radius = [60, 100, 140, 180, 220, 260];
    var currentDate = new Date();
    let second = currentDate.getSeconds();
    let minute = currentDate.getMinutes();
    let hour = currentDate.getHours()%12;
    let anglemin = minute*2*Math.PI/60 + 3*Math.PI / 2;
    let angle = second*2*Math.PI/60 + 3*Math.PI / 2;
    let angleh = hour*2*Math.PI/12 + 3*Math.PI / 2;
    let msecond = currentDate.getMilliseconds();
    setInterval(function () {
        seconds.forEach((number, index) => {
            const x = radius[index] * Math.cos(angle);
            const y = radius[index] * Math.sin(angle);

            number.innerHTML = second;
            number.style.transform = `translate(${x}px, ${y}px)`;
        });
        minutes.forEach((min, index1) => {
            const x = radius[index1] * Math.cos(anglemin);
            const y = radius[index1] * Math.sin(anglemin);

            min.innerHTML = minute;
            min.style.transform = `translate(${x}px, ${y}px)`;
        });
        hours.forEach((h, index2) => {
            const x = radius[index2] * Math.cos(angleh);
            const y = radius[index2] * Math.sin(angleh);

            h.innerHTML = hour;
            h.style.transform = `translate(${x}px, ${y}px)`;
        });
        var currentDate = new Date();

        second = currentDate.getSeconds();
        minute = currentDate.getMinutes();
        msecond = currentDate.getMilliseconds();
        hour = currentDate.getHours()%12;
        angle = second*2*Math.PI/60 + msecond*2*Math.PI/60000+ 3*Math.PI / 2;
        anglemin = minute*2*Math.PI/60 +second*2*Math.PI/3600+msecond*2*Math.PI/3600000 +3*Math.PI / 2;
        angleh = hour*2*Math.PI/12 +minute*2*Math.PI/3600 +second*2*Math.PI/216000+second*2*Math.PI/216000000+ 3*Math.PI / 2;

    }, 100);
});
