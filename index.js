function createLoginTracker(userInfo) {
    let attemptCount = 0;
    let locked = false;

    const loginAttempt = (passwordAttempt) => {
        if (locked) {
            return "Account locked due to too many failed login attempts";
        }

        attemptCount++;

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // ❗ allow 3 failed attempts FIRST
        if (attemptCount >= 4) {
            locked = true;
            return "Account locked due to too many failed login attempts";
        }

        return `Attempt ${attemptCount}: Login failed`;
    };

    return loginAttempt;
}

module.exports = {
    createLoginTracker
};