"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function deleteImage(images) {
    images.forEach(function (image) {
        fs_1.default.unlink(path_1.default.resolve(__dirname, '..', '..', 'upload', 'images', image.path), function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
}
function renameImage(enterprise_Name, images) {
    images.forEach(function (image) {
        fs_1.default.rename(path_1.default.resolve(__dirname, '..', '..', 'upload', 'images', image.path), path_1.default.resolve(__dirname, '..', '..', 'upload', 'images', enterprise_Name.replace(' ', '_') + image.path), function (err) {
            if (err) {
                console.log(err);
            }
        });
        image.path = enterprise_Name.replace(' ', '_') + image.path;
    });
    return images;
}
exports.default = { deleteImage: deleteImage, renameImage: renameImage };
