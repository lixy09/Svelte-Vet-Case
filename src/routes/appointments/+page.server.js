export const load = async (serverLoadEvent) => {
    try {
        // fetch appointment urls
        const { fetch } = serverLoadEvent;
        const res = await fetch(`http://localhost:3012/api/v1/appointments/`);
        const itemUrls = await res.json();

        // use the url to fetch again
        const itemPromises = itemUrls.data.map(async(url) => {
            const res = await fetch(`http://localhost:3012/api/v1${url}`);
            return res.json();
        });

        // wait for all fetches to complete
        const items = await Promise.all(itemPromises);
        return { items };
    } catch (error) {
        return {
            error,
        };
    }
};
