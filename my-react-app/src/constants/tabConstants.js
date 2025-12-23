const tabConfig = [
  {
    tabName: "Profile",
    validation(data,err){
      if(!data["formAge"] || data["formAge"]<18){
        err["formAge"]="ERROR: AGE IS NOT CORRECT"
      }
      if(!data["formEmail"] || data["formEmail"].length<2){
        err["formEmail"]="ERROR: formEmail IS NOT CORRECT"
      }
      return (err["formAge"]||err["formEmail"])?false:true;
    },
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
    validation(data,err){
      // validation logic for interest
    },
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
    validation(data,err){
      //validation logic for settings
    },
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
