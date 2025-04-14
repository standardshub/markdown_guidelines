---
title: Setup Index File
description: ''
position: 105
category: MD2HTML App
---

## MD2HTML v2.x
Each Technical document folder MUST include an `index.md` file.

⚠️ Important:
In MD2HTML version 2.0, the index file format changed from `.md` to `.yaml`.
The old `index.md` file is no longer valid and MUST be replaced with `index.yaml` in the root folder for each document.

📄 *Example of an `index.yaml` file for MD2HTML v2.x*:
        
```
---
title: "Lightweight Machine to MachineTechnical Specification: Core"
status: "Approved"
version: "1.2"
organizationName: "Open Mobile Alliance (OMA)"
date: "2020-11-10"
copyrightDate: "2023"
logo: "images/oma_logo.png"
documentName: "OMA-TS-LightweightM2M_Core-V1_2-20201110-A"
watermark: "DRAFT"
files:
- License.md
- OMA-TS-LightweightM2M_Core.md
- Appendix_A.md
- Appendix_B.md
- Appendix_C.md
- Appendix_D.md
- Appendix_E.md
- Appendix_F.md
- Appendix_G.md
- Appendix_H.md
- Appendix_I.md
- Appendix_J.md
- Appendix_K.md
- Appendix_L.md
- Appendix_M.md
---
# Detailed instructions see at https://markdown.standardshub.io/md2html-setup.
```

### 🔧 Properties

| Property           | Description |
|--------------------|-------------|
| `title`            | Title of the document, as displayed on the front page. |
| `status`           | Publication status — e.g., `Draft`, `Candidate`, `Approved`. |
| `version`          | Document version, e.g., `1.2`, `V1.0.3`. |
| `organizationName` | Full name of the publishing organization. |
| `date`             | Publication date in `YYYY-MM-DD` format. |
| `copyrightDate`    | Year of copyright (e.g., `2024`). |
| `logo`             | Path to the logo file (optional, used on front pages). |
| `documentName`     | Filename used to generate the final document (without extension). |
| `watermark`        | Watermark to apply in the PDF. Options: `"DRAFT",  "CANDIDATE", "HISTORIC", "DEPRECATED", "PRE-APPROVED", "APPROVED"`. |
| `files`            |A sequential list of Markdown files required to compile into a complete, final document. Must include the main content and any appendices. |


<alert>In MD2HTML v2.0, the `License.md` contains the license defined for that particular document. It can be inserted at the top of the list of files or at the botoom.</alert>
