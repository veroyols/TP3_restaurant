export default function Section (sectionData) {
    return `
    <section id="${sectionData.id}">
        <h2 class="title">${sectionData.title}</h2>
        <p class="text">${sectionData.text}</p>
        <ul class="list">
            ${sectionData.listItems.map((item, i) => 
                `<li>${item}</li>`
            )
            .join('')}
        </ul>
    </section>
    `
}