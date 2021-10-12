module.exports = function (req, res, next) {
    if (req.user.role !== "admin") return res.status(403).send('Forbidden');
    next();
}


//jubayer->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0ZjNiZTlmOGEzZWEwYmU4N2JmMGYiLCJlbWFpbCI6Imp1YmF5ZXJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MzQwMDU5NTF9.ksF3vaaJhDPOffd6ninXfyIdd4lzEtUXDK9a1mp6PvM

//sahid->  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0ZTYzYzMzMWZmMmZlOTI4Y2Y5YjEiLCJlbWFpbCI6InNhaGlkQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjM0MDAyNDkyfQ.giMb9XGQgnXEKBNi5EX-FwTS0JQ-P9ARpgyvZWNqQ_c


//ataur-> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY0ZTVmNTAyMDZlN2M3MWExMjM0NTciLCJlbWFpbCI6ImF0YXVyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjM0MDAyNDIyfQ.EK-XiY2XG5O7lBPO4SzcSjy5dEUL5_Q_zZc9ogJJk1A