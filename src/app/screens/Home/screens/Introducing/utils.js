const STATUS_200 = 200;
const BATCH_SIZE = 30;

const convertImageToBlob = url =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === STATUS_200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });

const getImageRequestBatch = (sequence, initialIndex, limit) => {
  const requests = sequence
    .slice(initialIndex, initialIndex + limit)
    .map(imageUrl => convertImageToBlob(imageUrl));
  return Promise.all(requests);
};

export const requestImageBatch = async (sequence, initialIndex, finalImages) => {
  const imageRequestImages = await getImageRequestBatch(sequence, initialIndex, BATCH_SIZE);
  imageRequestImages.forEach(
    (blob, index) => (finalImages[initialIndex + index] = URL.createObjectURL(blob))
  );
  if (initialIndex + BATCH_SIZE >= sequence.length) {
    return finalImages;
  }
  return requestImageBatch(sequence, initialIndex + BATCH_SIZE, finalImages);
};
