---
title: Setup Index File
description: ''
position: 105
category: MD2HTML App
---
Currently there are two versions of the MD2HTML Application.

## MD2HTML v1.x
The file `index.md` MUST exist inside of each Technical  document folder. 

<img width="645" alt="image" src="https://user-images.githubusercontent.com/3258579/182251495-78ce12dd-a36b-4e5c-8684-6c34cfc83c6f.png">

Example of a `index.md` file, MD2HTML v1.x:

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

## MD2HTML v2.x

In v2.0 the file name extension was changed from `.md` to `.yaml`. The `index.yaml` file MUST added to the root folder for each document.

Example of an `index.yaml` file for MD2HTML v2.x:
        
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
### New Properties:
* `organizationName`:  represents the name of the organization.
* `copyrightDate`:         the copyright date now is defined by this property
* `logo`:                          this allows each document to have its own logo
* `watermark`:               this property inserts a watermark inside of the PDF. Possible values are: "DRAFT",  "CANDIDATE", "HISTORIC", "DEPRECATED", "PRE-APPROVED", "APPROVED".