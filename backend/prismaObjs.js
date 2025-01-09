class User {
    static ROLES = {
        ADMIN: 'ADMIN',
        USER: 'USER',
        MODERATOR: 'MODERATOR',
    };

    static GENDER = {
        MALE: 'MALE',
        FEMALE: 'FEMALE',
        OTHERS: 'OTHERS',
    };

    static USERSTATUS = {
        ACTIVE: 'ACTIVE',
        INACTIVE: 'INACTIVE',
        BANNED: 'BANNED',
    };

    constructor(
        username,
        password,
        firstName = '',
        lastName = '',
        email,
        dob = '',
        gender = User.GENDER.OTHERS,
        role = User.ROLES.USER,
        profileImage = null,
        bio = '',
        flagCount = 0,
        status = User.USERSTATUS.INACTIVE,
        badges = {}
    ) {
        if (!username || !password || !email) {
            throw new Error('Username, password, and email are required fields');
        }

        this.dataRep = {
            username,
            password,
            firstName,
            lastName,
            email,
            dob,
            gender,
            role,
            profileImage,
            bio,
            flagCount,
            status,
            badges,
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }

    data() {
        return this.dataRep;
    }
}

module.exports = User;