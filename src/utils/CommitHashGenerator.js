export const commitHashGenerator = () => {
    return Math.random().toString(36).slice(-5);
};