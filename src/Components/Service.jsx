export const ProductService = {
    getProductsData() {
        return [
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Active"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Awaiting Approval"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Active"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Deactivated"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Active"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Deactivated"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Awaiting Approval"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Active"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Awaiting Approval"
            },
            {
                firstName: "Temitope",
                lastName: " Adejumoke",
                phoneNumber: "+234800 000 0000",
                location: "Festac",
                partner: "The Place",
                status: "Deactivated"
            },

        ];
    },

   
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

