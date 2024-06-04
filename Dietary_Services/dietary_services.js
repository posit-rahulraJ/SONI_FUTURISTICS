let userRole = "employee";
let accessLevel;
if (userRole === "Employee") {
    accessLevel = "Full access for dietary services";
} else if (userRole === "Enrolled_MEmber") {
    accessLevel = "Access granted for dietary service and one-one interation with dietician";
} else {
    accessLevel = "Subscriber";
}
console.log("Access Level:", accessLevel);
let isLoggedIn= true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "Employee") {
        userMessage = "Welcome, Employee!";
    } else {
        userMessage = "Welcome, Enrolled_MEmber!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "Non-subscriber":
        userCategory = "Non-Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


