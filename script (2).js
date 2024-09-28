// script.js
function filterColleges() {
    const input = document.getElementById("locationInput").value.toLowerCase();
    const collegeList = document.getElementById("collegeList");
    const colleges = collegeList.getElementsByClassName("college");

    for (let i = 0; i < colleges.length; i++) {
        const collegeLocation = colleges[i].getAttribute("data-location").toLowerCase();
        if (collegeLocation.includes(input)) {
            colleges[i].style.display = "";
        } else {
            colleges[i].style.display = "none";
        }
    }
}