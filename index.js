document.addEventListener('DOMContentLoaded', (event) => {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const date = document.querySelector("#date");
    const month = document.querySelector("#month");

    setInterval(() => {
        const currdate = new Date();
        const htime = currdate.getHours();
        const mtime = currdate.getMinutes();
        const stime = currdate.getSeconds();
        const hrotation = 30 * htime + mtime / 2;
        const mrotation = 6 * mtime;
        const srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
        date.textContent = currdate.getDate();
        month.textContent = currdate.toLocaleDateString('default', {month: 'short' });
        
    }, 1000);
});
