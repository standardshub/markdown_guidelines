---
title: Setup
description: ''
position: 210
category: MD2HTML App
---

## Setup
### Index.md

This file `index.md` MUST exist inside of the folder for each Technical  document. 

Example:


        ---
        title: "Lightweight Machine to Machine Technical Specification: Core"
        status: "Approved"
        version: "1.2"
        date: "2020-11-10"
        documentName: "OMA-TS-LightweightM2M_Core-V1_2-20201110-A"
        files:
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

* `title`
    * Title of the document, as displayed on the front page
* `status`
    * Document status, e.g., `Draft`, `Candidate`, `Approved`
* `version`
    * Document version, e.g., `V1.0.3`
* `date`
    * In format `YYYY-MM-DD`
* `documentName`
    * File name without extension format. See example above
* `files`
    * This property, list all the names of the markdown documents to display in the order in which should appear on the final document
