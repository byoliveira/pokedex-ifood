export default class UpdateFileController {
  static storeFile(request, response) {
    const { filename } = request.file;

    response.json({ arquivo: filename });
  }
}
