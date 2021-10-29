import './style.css'

// import "@esri/calcite-components"; // doesn't work

// import "@esri/calcite-components/dist/calcite/calcite.esm.js";
// throws error
// Uncaught TypeError: Cannot read properties of undefined (reading 'data-opts')

// import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

// setAssetPath(document.currentScript?.src);
defineCustomElements();

const loader = document.createElement("calcite-loader");
document.body.appendChild(loader);
loader.isActive = true;