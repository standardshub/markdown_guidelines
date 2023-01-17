---
title: Embed Files
description: ''
position: 197
category: Constructors
---

## XML Files
### :supp
**File Name: "OMA-SUP-XML_LWM2M_Access_Control-V1_Z.xml"**

    {:supp Repository_Name/[Branch_Name] [Folder_Name]/File_Name.xml}

* This constructor inserts an XML file inside of an HTML document as a table:

**Examples:**

    {:supp Repository_Name/[Branch_Name] [Folder_Name]/File_Name.xml}

Example of `development` branch:

    {:supp LwM2M-Objects/development Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}

* Inserts the latest revision of LwM2M Device v1.0.Z Object inside of the HTML document. The Object file is stored in the LwM2M-Object repository, in the "development" branch and inside of a folder called "Device".

Example of `master` branch:

    {:supp LwM2M-Objects/ Device/OMA-SUP-XML_LWM2M_Device-V1_0_Z.xml}

* Inserts the latest revision of LwM2M Device v1.0.Z Object inside of the HTML document. The Object file is stored in the LwM2M-Object repository, in the "master" branch (which is omitted) and inside of a folder called "Device".

### :supp1
**File Name without Object Version**

* File Name: "LWM2M_Access_Control.xml"


        {:supp1 Repository_Name/[Branch_Name | Release] File_Name.xml}

Examples:

        {:supp1 objects-lwm2m/dev LWM2M_Access_Control.xml}

* repository: "objects-lwm2m"
* branch: `dev`
* File Name: "LWM2M_Access_Control.xml"

        {:supp1 objects-lwm2m/v1_1 LWM2M_Access_Control.xml}

    * repository: "objects-lwm2m"
    * release: `v1_1`
    * File Name: "LWM2M_Access_Control.xml"

### :supp3
**Insert content from any file type (.xml; .xsd; .html; etc)**

    {:supp3 [repository]/[branch/tag] [with folder |without folder]/[filename.extension]}

**Examples:**

**Option A - with folder**

In this case the schema inserted is located in:
* Repository: "Test_LwM2M_v1_1"
* Branch: `schema`
* Folder: "SUP"
* File name: "OMA-SUP-XML_LWM2M.xsd"

        {:supp3 Test_LwM2M_v1_1/schema SUP/OMA-SUP-XML_LWM2M.xsd}

**Option B - without folder**

In this case the schema inserted is located in:
* Repository: "Test_LwM2M_v1_1"
* Branch: `schema`
* Folder: none (file at the root)
* File name: LWM2M.xsd

        {:supp3 Test_LwM2M_v1_1/schema LWM2M.xsd}

**Option C - with folder**

In this case the schema inserted is located in:
* Repository: "LwM2M"
* Branch: `master`
* Folder: "SUP"
* File name: OMA-SUP-XML_LWM2M.xsd

        {:supp3 LwM2M/master SUP/OMA-SUP-XML_LWM2M.xsd}

**C.1 now omitting the name of the branch "master"**

        {:supp3 LwM2M/ SUP/OMA-SUP-XML_LWM2M.xsd}

**Option D - in a tag, with folder**

In this case the schema inserted is located in:

* Repository: "LwM2M"
* Branch: `v1_1-20180710-A` (this is a release tag)
* Folder: "SUP"
* File name: OMA-SUP-XML_LWM2M.xsd

        {:supp3 LwM2M/v1_1-20180710-A SUP/OMA-SUP-XML_LWM2M.xsd}