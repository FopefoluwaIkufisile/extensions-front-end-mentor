const extensionsArray = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

const test = extensionsArray.filter((extension) => extension.isActive);
// console.log(test)

const test2 = extensionsArray.map((extension)=>{
    return {
        ...extension,
        description: extension.description.length > 50 ? extension.description.substring(0,50) + "..." : extension.description
    }
})
// console.log(test2)

const all = document.getElementById("all");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");


const extensions =  document.getElementById("extensions");

all.addEventListener("click", () => {
    // Clear the existing extensions
    extensions.innerHTML = "";
    extensionsArray.map((extension, index) => {
        const extensiondiv = document.createElement("div");
        extensiondiv.classList.add("extension");
        extensiondiv.innerHTML = `
            <div class="extension-info">
              <div class="icon">
                <img src="${extension.logo}" alt="" />
              </div>
              <div class="icon-text">
                <h3>${extension.name}</h3>
                <p>${extension.description}</p>
              </div>
            </div>
            <div class="button-and-toggle">
              <button class="btn remove">Remove</button>
              <label class="switch">
                <input type="checkbox" ${extension.isActive ? 'checked' : ''} data-index="${index}" />
                <span class="slider round"></span>
              </label>
            </div>
        `;
        
        const checkbox = extensiondiv.querySelector('input[type="checkbox"]');
        
        // Add event listener to checkbox to update isActive
        checkbox.addEventListener("change", (e) => {
            const index = e.target.getAttribute("data-index");
            extensionsArray[index].isActive = e.target.checked;
            console.log(`Extension: ${extensionsArray[index].name} isActive: ${extensionsArray[index].isActive}`);
        });
        
        extensions.appendChild(extensiondiv);
    });
});

active.addEventListener("click", () => {
    // Clear the existing extensions
    extensions.innerHTML = "";
    extensionsArray.filter((extension) => extension.isActive).map((extension, index) => {
        const extensiondiv = document.createElement("div");
        extensiondiv.classList.add("extension");
        extensiondiv.innerHTML = `
            <div class="extension-info">
              <div class="icon">
                <img src="${extension.logo}" alt="" />
              </div>
              <div class="icon-text">
                <h3>${extension.name}</h3>
                <p>${extension.description}</p>
              </div>
            </div>
            <div class="button-and-toggle">
              <button class="btn remove">Remove</button>
              <label class="switch">
                <input type="checkbox" ${extension.isActive ? 'checked' : ''} data-index="${index}" />
                <span class="slider round"></span>
              </label>
            </div>
        `;
        
        const checkbox = extensiondiv.querySelector('input[type="checkbox"]');
        
        // Add event listener to checkbox to update isActive
        checkbox.addEventListener("change", (e) => {
            const index = e.target.getAttribute("data-index");
            extensionsArray[index].isActive = e.target.checked;
            console.log(`Extension: ${extensionsArray[index].name} isActive: ${extensionsArray[index].isActive}`);
        });
        
        extensions.appendChild(extensiondiv);
    });
});

inactive.addEventListener("click", () => {
    // Clear the existing extensions
    extensions.innerHTML = "";
    extensionsArray.filter((extension) => !extension.isActive).map((extension, index) => {
        const extensiondiv = document.createElement("div");
        extensiondiv.classList.add("extension");
        extensiondiv.innerHTML = `
            <div class="extension-info">
              <div class="icon">
                <img src="${extension.logo}" alt="" />
              </div>
              <div class="icon-text">
                <h3>${extension.name}</h3>
                <p>${extension.description}</p>
              </div>
            </div>
            <div class="button-and-toggle">
              <button class="btn remove">Remove</button>
              <label class="switch">
                <input type="checkbox" ${extension.isActive ? 'checked' : ''} data-index="${index}" />
                <span class="slider round"></span>
              </label>
            </div>
        `;
        
        const checkbox = extensiondiv.querySelector('input[type="checkbox"]');
        
        // Add event listener to checkbox to update isActive
        checkbox.addEventListener("change", (e) => {
            const index = e.target.getAttribute("data-index");
            extensionsArray[index].isActive = e.target.checked;
            console.log(`Extension: ${extensionsArray[index].name} isActive: ${extensionsArray[index].isActive}`);
        });
        
        extensions.appendChild(extensiondiv);
    });
});


// Initial rendering of extensions on mount
extensionsArray.map((extension, index) => {
    const extensiondiv = document.createElement("div");
    extensiondiv.classList.add("extension");
    extensiondiv.innerHTML = `
        <div class="extension-info">
          <div class="icon">
            <img src="${extension.logo}" alt="" />
          </div>
          <div class="icon-text">
            <h3>${extension.name}</h3>
            <p>${extension.description}</p>
          </div>
        </div>
        <div class="button-and-toggle">
          <button class="btn remove">Remove</button>
          <label class="switch">
            <input type="checkbox" ${extension.isActive ? 'checked' : ''} data-index="${index}" />
            <span class="slider round"></span>
          </label>
        </div>
    `;

    // Get the checkbox element
    const checkbox = extensiondiv.querySelector('input[type="checkbox"]');

    // Add event listener to update isActive property when checkbox changes
    checkbox.addEventListener("change", (e) => {
        const index = e.target.getAttribute("data-index");
        extensionsArray[index].isActive = e.target.checked;
        console.log(`Extension: ${extensionsArray[index].name} isActive: ${extensionsArray[index].isActive}`);
    });

    // Append the extension to the extensions container
    extensions.appendChild(extensiondiv);
});
