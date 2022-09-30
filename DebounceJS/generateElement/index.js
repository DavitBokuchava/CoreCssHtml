export class CreateElement {
    constructor(tag, type, className, name, value, spellcheck, autocorrect, rows, cols, placeholder) {
        this.tag = tag;
        this.type = type;
        this.className = className;
        this.name = name;
        this.value = value;
        this.spellcheck = spellcheck;
        this.autocorrect = autocorrect;
        this.rows = rows;
        this.cols = cols;
        this.placeholder = placeholder;
    }

    createEls() {
        this.tag = document.createElement(this.tag);
        if (this.placeholder) {
            this.tag.setAttribute(this.placeholder[0], this.placeholder[1]);
        }
        if (this.spellcheck) {
            this.tag.setAttribute(this.spellcheck[0], this.spellcheck[1]);
        }
        if (this.autocorrect) {
            this.tag.setAttribute(this.autocorrect[0], this.autocorrect[1]);
        }
        if (this.rows) {
            this.tag.setAttribute(this.rows[0], this.rows[1]);
        }
        if (this.cols) {
            this.tag.setAttribute(this.cols[0], this.cols[1]);
        }
        if (this.className) {
            this.tag.classList.add(...this.className.split(' '));
        }
        if (this.name) {
            this.tag.setAttribute('name', this.name);
        }
        if (this.value) {
            this.tag.setAttribute('value', this.value);
        }
        if (this.type) {
            this.tag.setAttribute('type', this.type);
        }
        this.tag.innerHTML = this.value;
        return this.tag;
    }
}