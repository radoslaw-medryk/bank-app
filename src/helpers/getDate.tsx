export const getDate = (dateTime: Date) => {
    const unixTimestampMs = dateTime.getTime();
    const msInDay = 1000 * 60 * 60 * 24;

    const roundedTimestampMs = unixTimestampMs - (unixTimestampMs % msInDay);
    return new Date(roundedTimestampMs);
};
