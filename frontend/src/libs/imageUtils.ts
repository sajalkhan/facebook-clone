export const validateImage = (img: File) => {
  const maxSize = 1024 * 1024 * 2; // 2MB
  const supportedFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (!supportedFormats.includes(img.type)) {
    throw new Error(`${img.name} format is unsupported! Only Jpeg, Png, Webp, Gif are allowed.`);
  }
  if (img.size > maxSize) {
    throw new Error(`${img.name} size is too large. Max 2MB allowed.`);
  }
};

export const handleFileInput = async (
  files: File[],
  images: string[],
  setImages: (value: string[]) => void,
  setError: (value: string) => void
) => {
  const validatedFiles = files.filter(img => {
    try {
      validateImage(img);
      return true;
    } catch (error) {
      setError((error as Error).message);
      return false;
    }
  });

  const imageStrings = await Promise.all(
    validatedFiles.map(
      img =>
        new Promise<string>(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = () => resolve(reader.result as string);
        })
    )
  );

  setImages([...images, ...imageStrings]);
};
