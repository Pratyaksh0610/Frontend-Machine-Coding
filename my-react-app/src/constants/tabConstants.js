const tabConfig = [
  {
    tabName: "Profile",
    fields: [
      {
        label: "Age i/p",
        type: "number",
        placeholder: "8",
        name: "formAge",
      },
      {
        label: "EMAIL i/p",
        type: "email",
        placeholder: "johnDoe@gmail.com",
        name: "formEmail",
      },
    ],
  },
  {
    tabName: "Interest",
    fields: [
      {
        label: "RDR2",
        type: "checkbox",
        name: "RDR2",
      },
      {
        label: "E33",
        type: "checkbox",
        name: "E33",
      },
      {
        label: "SM2",
        type: "checkbox",
        name: "SM2",
      },
      {
        label: "HarryPotter",
        type: "checkbox",
        name: "HarryPotter",
      },
    ],
  },
  {
    tabName: "Settings",
    fields: [
      {
        label: "dark",
        type: "radio",
        name: "theme",
        value: "dark"
      },
      {
        label: "light",
        type: "radio",
        name: "theme",
        value: "light"
      },
    ],
  },
];

export default tabConfig;
