// pages/api/upload.js
import multer from 'multer';
import fs from 'fs-extra';
import path from 'path';

const upload = multer({
  dest: 'uploads/', // Define the upload directory
});

export default upload.single('image'), async (req, res) => {
  try {
    // The uploaded file is available as req.file
    const { file } = req;

    // Generate a unique filename
    const uniqueFilename = `${Date.now()}-${file.originalname}`;

    // Define the destination path for the uploaded file
    const destinationPath = path.join('public', 'uploads', uniqueFilename);

    // Move the uploaded file to the destination
    await fs.move(file.path, destinationPath);

    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
};
