<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    
    <div class="container">
                <h1 class="registration">REGISTRATION FORM</h1>
        <label for="Firstname">First name:</label>
        <input type="text" id="Firstname" required>

        <label for="Middlename">Middle name:</label>
        <input type="text" id="Middlename">

        <label for="Lastname">Last name:</label>
        <input type="text" id="Lastname" required>

        <label for="Email">Email:</label>
        <input type="email"  id="email">

        <label for="Contact">Contact:</label>
        <input type="text" id="number" min="0" maxlength="11">

        <label for="Batch">Batch:</label>
        <input type="text" id="Batch" min="0" maxlength="2">

        <label for="ID">ID:</label>
        <input type="ID"  id="ID">

        <label for="Technology">Course:</label>
        <select name="Course">
            <option value=""hidden></option>
            <option value="Computer">Computer Engineering</option>
            <option value="Electrical">Electrical Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Electronic">Electronic Engineering</option>
        </select>
    
         <div class="button-container">
            <button type="submit">Register</button>
        </div>

    </div>

   <script src="./index.js"></script>

</body>
</html>