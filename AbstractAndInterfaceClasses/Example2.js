

class StorageProvider {
    upload(file){};
    download(filename){};
}


class LocalStorageProvider extends StorageProvider {

    upload(file) {};
    download(filename) {};
}   

class CloudStorageProvider extends StorageProvider {
    upload(file){};
    download(filename){};
}
 function useStorage(provider) {
       if (typeof provider.upload === 'function' && typeof provider.download === 'function') {
        return `Works`;
       } else {
        throw new Error("Invalid storage provider");
       }
}

console.log(useStorage(new LocalStorageProvider()));
// Works

console.log(useStorage({}));
// Error: Invalid storage provider
