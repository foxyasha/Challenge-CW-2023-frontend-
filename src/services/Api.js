export const api = async () => {
    const result = await fetch('http://contest.elecard.ru/frontend_data/catalog.json');
    const data = await result.json();

    return data;
};
