const productos = [
  {
    id: 1,
    categoria: "audio",
    foto: "https://pccore.com.ar/6727-large_default/auriculares-gamer-trust-gxt307-ravu-plug-35-blue.jpg",
    name: "AURICULARES GAMER TRUST GXT307 RAVU PLUG 3.5 BLUE",
    precio: 2590,
  },
  {
    id: 2,
    categoria: "camara",
    foto: "https://pccore.com.ar/5135-large_default/webcam-logitech-c505-hd-cmicrofono-usb-2mts.jpg",
    name: "WEBCAM LOGITECH C505 HD C/MICROFONO USB 2MTS",
    precio: 5899,
  },
  {
    id: 3,
    categoria: "impresora",
    foto: "https://pccore.com.ar/3113-large_default/impresora-hp-laser-mono-m107a.jpg",
    name: "IMPRESORA HP LASER MONO M107A",
    precio: 17999,
  },
  {
    id: 4,
    categoria: "teclado",
    foto: "https://pccore.com.ar/3921-large_default/teclado-usb-genius-kb-101-smart-black.jpg",
    name: "TECLADO USB GENIUS KB-101 SMART BLACK",
    precio: 899,
  },
  {
    id: 5,
    categoria: "monitor",
    foto: "https://pccore.com.ar/2694-large_default/monitor-22-led-lenovo-l22e-20-fullhd.jpg",
    name: "MONITOR 22 LED HP N223 FHD VGA HDMI",
    precio: 22999,
  },
  {
    id: 6,
    categoria: "pc",
    foto: "https://pccore.com.ar/6950-large_default/pc-amd-pccore-athlon-320ge-8gb-240ssd-nvme.jpg",
    name: "PC AMD PCCORE ATHLON 320GE 8GB 240SSD NVME",
    precio: 41989,
  },
  {
    id: 7,
    categoria: "mouse",
    foto: "https://pccore.com.ar/3933-large_default/mouse-usb-genius-dx-120-negro.jpg",
    name: "MOUSE USB GENIUS DX-120 NEGRO",
    precio: 460,
  },
  {
    id: 8,
    categoria: "audio",
    foto: "https://pccore.com.ar/3477-large_default/parlante-jbl-go-2-bluetooth-portatil-ipx7-grey.jpg",
    name: "PARLANTE JBL GO 2 BLUETOOTH PORTATIL IPX7 GREY ",
    precio: 4998,
  },
  {
    id: 9,
    categoria: "almacenamiento",
    foto: "https://pccore.com.ar/6229-large_default/disco-solido-ssd-m-2-250gb-adata-swordfish-nvme.jpg",
    name: "DISCO SOLIDO SSD M.2 250GB ADATA SWORDFISH NVME  ",
    precio: 5599,
  },
  {
    id: 10,
    categoria: "microprocesador",
    foto: "https://pccore.com.ar/3239-large_default/microprocesador-intel-core-i5-10400-6core-1200.jpg",
    name: "MICROPROCESADOR INTEL CORE I5-10400 6CORE 1200",
    precio: 29999,
  },
];

export const getProductos = new Promise((resolve, reject) => {
  let respuesta = "200";

  if (respuesta === "200") {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject("404");
  }
});

const producto = {
  id: 10,
  foto: "https://pccore.com.ar/3239-large_default/microprocesador-intel-core-i5-10400-6core-1200.jpg",
  name: "MICROPROCESADOR INTEL CORE I5-10400 6CORE 1200",
  precio: 29999,
};

export const getFetchUno = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
