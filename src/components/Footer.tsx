const Footer = () => {
  return (
    <footer className="mt-3 py-6 lg:px-14 px-8 flex items-center justify-between">
      <div>
        &copy; Mentorium 2023. Developed by{" "}
        <a
          href="https://valehismayilov.com"
          className="font-bold hover:underline"
          target="_blank"
        >
          Valeh Ismayilov
        </a>
        .
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <a
            href="https://drive.google.com/drive/folders/1hLoz66-EDqh8Wq_A6dkh-I-_5q-Br8Ka?usp=sharing"
            target="_blank"
            className="text-2xl"
          >
            <i className="fa-brands fa-google-drive"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
