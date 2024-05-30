import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
// https://www.cphpvb.net/transliteration/glagolica.php
function App() {
  const columnsGrid = [
    { field: "letter", headerName: "Буква", minWidth: 100 },
    // { field: "unicode", headerName: "Unicode", minWidth: 100 },
    { field: "name", headerName: "Име", minWidth: 100 },
    { field: "sound", headerName: "Звук", minWidth: 100 },
    { field: "numericValue", headerName: "Числена стойност", minWidth: 150 },
    {
      field: "cyrillicConnection",
      headerName: "Връзка с кирилицата",
      minWidth: 150,
    },
    // { field: "greekConnection", headerName: "Връзка с гръцкия", minWidth: 150 },
  ];
  const columns = [
    { id: "letter", label: "Буква" },
    // { id: "unicode", label: "Unicode" },
    { id: "name", label: "Име" },
    { id: "sound", label: "Звук" },
    { id: "numericValue", label: "Числена стойност" },
    { id: "cyrillicConnection", label: "Връзка с кирилицата" },
    // { id: "greekConnection", label: "Връзка с гръцкия" },
  ];
  const rows = [
    {
      id: 1,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Glagoljica_Az.svg",
      unicode: "Ⰰ",
      name: "Аз",
      meaning: "аз",
      sound: "а",
      numericValue: 1,
      greekConnection: "Alpha (Α)",
      cyrillicConnection: "А",
    },
    {
      id: 2,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/Glagolitic_buky.svg",
      unicode: "Ⰱ",
      name: "Буки",
      meaning: "букви",
      sound: "б",
      numericValue: 2,
      greekConnection: "",
      cyrillicConnection: "Б",
    },
    {
      id: 3,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Glagoljica_Vedi.svg",
      unicode: "Ⰲ",
      name: "Веди",
      meaning: "виж",
      sound: "в",
      numericValue: 3,
      greekConnection: "Beta (Β)",
      cyrillicConnection: "В",
    },
    {
      id: 4,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Glagolitic_glagoli.svg",
      unicode: "Ⰳ",
      name: "Глагол",
      meaning: "говоря",
      sound: "г",
      numericValue: 4,
      greekConnection: "Gamma (Γ)",
      cyrillicConnection: "Г",
    },
    {
      id: 5,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Glagolitic_dobro.svg",
      unicode: "Ⰴ",
      name: "Добро",
      meaning: "добро",
      sound: "д",
      numericValue: 5,
      greekConnection: "Delta (Δ)",
      cyrillicConnection: "Д",
    },
    {
      id: 6,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Glagolitic_jest.svg",
      unicode: "Ⰵ",
      name: "Есть",
      meaning: "има",
      sound: "е",
      numericValue: 6,
      greekConnection: "Epsilon (Ε)",
      cyrillicConnection: "Е",
    },
    {
      id: 7,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Glagolitic_capital_letter_Zhivete.svg",
      unicode: "Ⰶ",
      name: "Живете",
      meaning: "живеете",
      sound: "ж",
      numericValue: 7,
      greekConnection: "",
      cyrillicConnection: "Ж",
    },
    {
      id: 8,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Glagolitic_dzelo.svg",
      unicode: "Ⰷ",
      name: "Дзело",
      meaning: "земя",
      sound: "дз",
      numericValue: 8,
      greekConnection: "",
      cyrillicConnection: "S („дз“)",
    },
    {
      id: 9,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Glagolitic_zemlja-new.svg",
      unicode: "Ⰸ",
      name: "Земля",
      meaning: "земя",
      sound: "з",
      numericValue: 9,
      greekConnection: "Zeta (Ζ)",
      cyrillicConnection: "З",
    },
    {
      id: 10,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Glagolitic_izhe.svg",
      unicode: "Ⰹ, Ⰺ",
      name: "Йота",

      sound: "и",
      numericValue: 10,
      greekConnection: "Iota (Ι)",
      cyrillicConnection: "Й, I",
    },
    {
      id: 11,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/Glagolitic_i.svg",
      unicode: "Ⰻ",
      name: "Иже",
      
      sound: "и",
      numericValue: 20,
      greekConnection: "Eta (Η)",
      cyrillicConnection: "И",
    },
    {
      id: 12,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Glagolitic_djerv.svg",
      unicode: "Ⰼ",
      name: "Герв",
      sound: `г'`,
      numericValue: 30,
      greekConnection: "",
      cyrillicConnection: `Г' („гь“), сръбско Ђ („джь“))`,
    },
    {
      id: 13,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Glagolitic_kako.svg",
      unicode: "Ⰽ",
      name: "Како",
      sound: "к",
      numericValue: 40,
      greekConnection: "Kappa (Κ)",
      cyrillicConnection: "К",
    },
    {
      id: 14,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Glagolitic_ljudi.svg",
      unicode: "Ⰾ",
      name: "Люди",
      sound: "л",
      numericValue: 50,
      greekConnection: "Lambda (Λ)",
      cyrillicConnection: "Л",
    },
    {
      id: 15,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Glagolitic_mislete.svg",
      unicode: "Ⰿ",
      name: "Мислете",
      sound: "м",
      numericValue: 60,
      greekConnection: "Mu (Μ)",
      cyrillicConnection: "М",
    },
    {
      id: 16,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Glagolitic_nash.svg",
      unicode: "Ⱀ",
      name: "Наш",
      sound: "н",
      numericValue: 70,
      greekConnection: "Nu (Ν)",
      cyrillicConnection: "Н",
    },
    {
      id: 17,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Glagolitic_on.svg",
      unicode: "Ⱁ",
      name: "Он",
      sound: "о",
      numericValue: 80,
      greekConnection: "Omicron (Ο)",
      cyrillicConnection: "О",
    },
    {
      id: 18,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/b/bf/Glagolitic_pokoi.svg",
      unicode: "Ⱂ",
      name: "Покой",
      sound: "п",
      numericValue: 90,
      greekConnection: "Pi (Π)",
      cyrillicConnection: "П",
    },
    {
      id: 19,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Glagolitic_rtsi.svg",
      unicode: "Ⱃ",
      name: "Рци",
      sound: "р",
      numericValue: 100,
      greekConnection: "Rho (Ρ)",
      cyrillicConnection: "Р",
    },
    {
      id: 20,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Glagolitic_slovo.svg",
      unicode: "Ⱄ",
      name: "Слово",
      sound: "с",
      numericValue: 200,
      greekConnection: "Sigma (Σ)",
      cyrillicConnection: "С",
    },
    {
      id: 21,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Glagolitic_tverdo.svg",
      unicode: "Ⱅ",
      name: "Твердо",
      sound: "т",
      numericValue: 300,
      greekConnection: "Tau (Τ)",
      cyrillicConnection: "Т",
    },
    {
      id: 22,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Glagolitic_capital_letter_Uku.svg",
      unicode: "Ⱆ",
      name: "Ук",
      sound: "у",
      numericValue: 400,
      greekConnection: "Upsilon (Υ)",
      cyrillicConnection: "У",
    },
    {
      id: 23,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Glagolitic_capital_letter_Fritu.svg",
      unicode: "Ⱇ",
      name: "Ферт",
      sound: "ф",
      numericValue: 500,
      greekConnection: "Phi (Φ)",
      cyrillicConnection: "Ф",
    },
    {
      id: 24,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Glagolitic_kher.svg",
      unicode: "Ⱈ",
      name: "Ха",
      sound: "х",
      numericValue: 600,
      greekConnection: "Chi (Χ)",
      cyrillicConnection: "Х",
    },
    {
      id: 25,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Glagolitic_capital_letter_Otu.svg",
      unicode: "Ⱉ",
      name: "От",
      sound: "о",
      numericValue: 700,
      greekConnection: "Omega (Ω)",
      cyrillicConnection: "използвана само за възпроизвеждане на гръцки",
    },
    {
      id: 26,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Glagolitic_tsi.svg",
      unicode: "Ⱌ",
      name: "Ци",
      sound: "ц",
      numericValue: 900,
      greekConnection: "",
      cyrillicConnection: "Ц",
    },
    {
      id: 27,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Glagolitic_cherv.svg",
      unicode: "Ⱍ",
      name: "Черв",
      sound: "ч",
      numericValue: 1000,
      greekConnection: "",
      cyrillicConnection: "Ч",
    },
    {
      id: 28,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Glagoljica_%C5%A0a.svg",
      unicode: "Ⱎ",
      name: "Ша",
      sound: "ш",
      numericValue: 2000,
      greekConnection: "",
      cyrillicConnection: "Ш",
    },
    {
      id: 29,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/Glagolitic_shta.svg",
      unicode: "Ⱋ",
      name: "Ща",
      sound: "щ",
      numericValue: 800,
      greekConnection: "",
      cyrillicConnection: "Щ",
    },
    {
      id: 30,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Glagolitic_yer.svg",
      unicode: "Ⱏ",
      name: "Ер голям",
      sound: "ъ",
      numericValue: 3000,
      greekConnection: "",
      cyrillicConnection: "Ъ",
    },
    {
      id: 31,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/Glagolitic_yeri.svg",
      unicode: "Ⰺ",
      name: "Еры",
      sound: "ы",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "Ы",
    },
    {
      id: 32,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Glagolitic_yerj.svg",
      unicode: "Ⱐ",
      name: "Ер малък",
      sound: "ь",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "Ь",
    },
    {
      id: 33,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Glagolitic_capital_letter_Yati.svg",
      unicode: "Ⱑ",
      name: "Ят (е-двойно)",
      sound: "ѣ",
      numericValue: 4000,
      greekConnection: "",
      cyrillicConnection: "ѣ (произнася се „е“ или „я“), премахната през 1945",
    },
    {
      id: 34,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Glagolitic_capital_letter_Yo.svg",
      unicode: "Ⱖ",
      name: "Я",
      sound: "я",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "Я",
    },
    {
      id: 35,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Glagolitic_yu.svg",
      unicode: "Ⱓ",
      name: "Ю",
      sound: "ю",
      numericValue: 5000,
      greekConnection: "",
      cyrillicConnection: "Ю",
    },
    {
      id: 36,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/Glagolitic_ens.svg",
      unicode: "Ⱔ",
      name: "Юс малък",
      sound: "ен",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "ѧ, не се употребява",
    },
    {
      id: 37,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Glagolitic_yens.svg",
      unicode: "Ⱗ",
      name: "Юс малък йотиран",
      sound: "йен",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "ѩ, не се употребява",
    },
    {
      id: 38,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Glagolitic_ons.svg",
      unicode: "Ⱘ",
      name: "Юс голям (носовка)",
      sound: "он",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection:
        "ѫ (чете се „ъ“, „он“), премахната от българския през 1945",
    },
    {
      id: 39,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Glagolitic_yons.svg",
      unicode: "Ⱙ",
      name: "Юс голям йотиран",
      sound: "йон",
      numericValue: null,
      greekConnection: "",
      cyrillicConnection: "ѭ, не се употребява",
    },
    {
      id: 40,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/e/e4/Glagolitic_fert.svg",
      unicode: "Ⱚ",
      name: "Тита",
      sound: "Т",
      numericValue: null,
      greekConnection: "Theta",
      cyrillicConnection: "ѳ, използвана само за възпроизвеждане на гръцки",
    },
    {
      id: 41,
      letter:
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Glagolitic_izhitsa.svg",
      unicode: "Ⱛ",
      name: "Ижица",
      sound: "и",
      numericValue: null,
      greekConnection: "Upsilon",
      cyrillicConnection: "ѵ, премахната от руския през 1917",
    },
  ];
  const [filteredRows, setFilteredRows] = useState(rows);
  const [inputValue, setInputValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    if (
      isCyrillicLetter(e.target.value[e.target.value.length - 1]) === true ||
      e.target.value === ""
    ) {
      const valueString = e.target.value.toUpperCase().replaceAll("ДЗ", "Ⰷ");
      let valueStringTranslated = "";
      let valueStringTranslated2 = "";
      setInputValue(e.target.value);
      /// replaceDZ(conversionToGlagolic(valueString));
      for (const character of valueString) {
        let char = conversionToGlagolic(character)[0];
        let name = conversionToGlagolic(character)[1];
        valueStringTranslated += char;
        valueStringTranslated2 += " " + name;
      }
      valueStringTranslated.replaceAll("ⰄⰈ", "Ⰷ");
      valueStringTranslated2.replaceAll("Добро Земля", "Дзело");
      // console.log(valueStringTranslated);      
      setTextValue(valueStringTranslated2);
      setLabelValue(valueStringTranslated);
    }
  };
  const conversionToGlagolic = (e) => {
    // console.log(e);
    if (isCyrillicLetter(e) === true) {
      const excludedIds = [25, 33, 36, 37, 38, 39, 40, 41];
      const filteredRows = rows.filter((row) => !excludedIds.includes(row.id));
      if (e === "Ⰷ") {
        return "Ⰷ";
      }
      if (e === "Ы") {
        return "Ⰺ";
      }
      if (e === "Й" || e === "I") {
        return "Ⱏ";
      }
      //need to convert all the letters to glagolic
      return findUnicodeByCyrillicConnection(e, filteredRows);
    } else {
      return [e, ""];
    }
  };
  const findUnicodeByCyrillicConnection = (letter, rows) => {
    console.log(rows);
    console.log(letter);
    for (const row of rows) {
      if (row.cyrillicConnection[0].toLowerCase() === letter.toLowerCase()) {
        return [row.unicode, row.name];
      }
    }
    return letter; // or any fallback value
  };
  const isCyrillicLetter = (letter) => {
    // if (isNumeric(letter)) {
    //   return false;
    // } else {
    // const cyrillicRegex = /[\u0400-\u04FF\u0500-\u052F]/;
    const cyrillicRegex = /[\u0410-\u044F]/; // This regex matches only Cyrillic uppercase and lowercase letters
    return cyrillicRegex.test(letter);
    // }
  };
  const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  useEffect(() => {
    console.log(labelValue);
    let newRows = [];
    for (const character of labelValue) {
      console.log(character);
      let x = rows.find((row) => row.unicode === character);
      // push if x does not exist in newRows
      if (x !== undefined) {
        if (!newRows.includes(x)) {
          newRows.push(x);
          setFilteredRows(newRows);
        }
      }
    }
    if (labelValue === "") {
      setFilteredRows(rows);
    }
  }, [labelValue]);
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Въведете текст на кирилица за да бъде преведен на глаголица
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            label="Въведи текст"
            value={inputValue}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Box>
        <Typography
          variant="h6"
          mt={2}
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem", // Adjust the value to your desired size
          }}
        >
          {labelValue}
        </Typography>
        <Typography
          variant="h6"
          mt={2}
          sx={{
            fontWeight: "bold",
            fontSize: "2.5rem", // Adjust the value to your desired size
          }}
        >
          {textValue}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      backgroundColor: "grey.200",
                      color: "grey.900",
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "30px",
                    }}
                  >
                    <img
                      src={row?.letter ?? ""}
                      alt={row?.name ?? ""}
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "contain",
                      }}
                    />
                  </TableCell>
                  {/* <TableCell>{row?.unicode ?? ""}</TableCell> */}
                  <TableCell>{row?.name ?? ""}</TableCell>
                  <TableCell>{row?.sound ?? ""}</TableCell>
                  <TableCell>{row?.numericValue ?? ""}</TableCell>
                  <TableCell>{row?.cyrillicConnection ?? ""}</TableCell>
                  {/* <TableCell>{row?.greekConnection ?? ""}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "30px",
                    }}
                  >
                    <img
                      src={row.letter}
                      alt={row.name}
                      style={{ width: "30px", height: "30px", objectFit: "cover" }}
                    />
                  </TableCell>
                  <TableCell>{row.unicode}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.sound}</TableCell>
                  <TableCell>{row.numericValue}</TableCell>
                  <TableCell>{row.greekConnection}</TableCell>
                  <TableCell>{row.cyrillicConnection}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </Box> */}
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6">
            Тълкувание за значението на буквите (от недостоверен източник)
          </Typography>
          <Typography variant="body1">
            Помни буквите, учи да говориш! - Аз буки, веди глаголати!
          </Typography>
          <Typography variant="body1">
            Добре е да живееш здраво на земята! - Добро ест живетe дзело земля!
          </Typography>
          <Typography variant="body1">
            Защото както хора мислите, наша е Той опора. - Иже (йота) како люди
            мислете, наш Он покой.
          </Typography>
          <Typography variant="body1">
            Изричай словото твърдо! - Рци слово твердо!
          </Typography>
          <Typography variant="body1">
            Нагоре всеки да лети! - Ук, ферт, ха!
          </Typography>
          <Typography variant="body1">
            Върви! Избягвай червея! - От! Ща чeрв!
          </Typography>
          <Typography variant="body1">Покорявай висотите! - Ци ша!</Typography>
          <Typography variant="body1">
            Ти мъж, ти юноша, вие хора! - Еръ, ер, ери! (Ер голям, Ер малък,
            Еры)
          </Typography>
          <Typography variant="body1">
            Човече! С ум и разум! - Йот! Е о! (Йот, Юс малък, Юс голям)
          </Typography>
          <Typography variant="body1">
            Във вярна посока и с ясно съзнание! - Йе йо! (Юс малък йотиран, Юс
            голям йотиран)
          </Typography>
          <Typography variant="body1">Напред! Слава! - Ю! Ят!</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
