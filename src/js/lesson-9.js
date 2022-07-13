const elements = document.getElementsByTagName('p');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(idElement) {
        if (this.idElement === undefined) {
            this.idElement = 0;
        }
        if (this[idElement] <= this.data.length - 1) {
            return {
                done: false,
                value: this.data[this[idElement]++],
            };
        } else {
            this[idElement] = 0;
            return {
                done: false,
                value: this.data[this[idElement]++],
            };
        }
    },
};

for (const text of elements) {
    text.addEventListener('click', () => {
        text.style.color = colors.next(text.id).value;
    });
}