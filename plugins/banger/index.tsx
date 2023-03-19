const {
    plugin: {store},
    ui: {TextBox, Header, HeaderTags},
} = shelter;

const urlOrDefault = () => store.url ? store.url : 'https://i.imgur.com/wp5q52C.mp4';

const observer = shelter.observeDom(`video:has(img[src='/assets/b6508869eb1b93a8e54729ac86985599.png'])`, (e: HTMLElement) => {
    (e.children[0] as HTMLSourceElement).src = urlOrDefault();
});

export function onUnload() {
    observer();
}

export function settings() {
    return (
        <div>
            <Header tag={HeaderTags.H3}>Video URL</Header>
            <TextBox
                placeholder="https://i.imgur.com/wp5q52C.mp4"
                value={urlOrDefault()}
                onInput={(url) => store.url = url}
            />
        </div>
    )
}
