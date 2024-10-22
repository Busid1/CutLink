const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

const validation = (link: string) => {
    let errors = {};

    if(!linkRegex.test(link)){
        errors = "Invalid URL";
    }

    return errors;
}

export default validation;