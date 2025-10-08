import multer from "multer";
import fs from "node:fs";
import path from "node:path";

const uploadDir = path.join(process.cwd(), "uploads");
// process.cwd(): Devuelve el directorio de trabajo actual desde donde se está ejecutando el proceso de Node.js.

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

//indica que esperas un solo archivo en el campo
export const upSimple = upload.single("imagen"); //imagen es el nombre del dato

//indica que esperas un solo archivo en el campo
export const upMulti = upload.array("imagenes", 10);

// Cuando se use este middleware en una ruta, Multer:
//1.  Procesará la solicitud multipart/form-data.
//2.  Guardará el archivo en disco (según storage).
//3.  Agregará la información del archivo en req.file.

//ALTER TABLE libro ADD COLUMN 'image_url' VARCHAR(255) NULL AFTER 'genero';
