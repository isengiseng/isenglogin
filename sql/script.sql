USE [master]
GO
/****** Object:  Database [IKU]    Script Date: 3/16/2018 7:18:44 AM ******/
CREATE DATABASE [IKU]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'IKU', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\IKU.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'IKU_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\IKU_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [IKU] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [IKU].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [IKU] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [IKU] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [IKU] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [IKU] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [IKU] SET ARITHABORT OFF 
GO
ALTER DATABASE [IKU] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [IKU] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [IKU] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [IKU] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [IKU] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [IKU] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [IKU] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [IKU] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [IKU] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [IKU] SET  DISABLE_BROKER 
GO
ALTER DATABASE [IKU] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [IKU] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [IKU] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [IKU] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [IKU] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [IKU] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [IKU] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [IKU] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [IKU] SET  MULTI_USER 
GO
ALTER DATABASE [IKU] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [IKU] SET DB_CHAINING OFF 
GO
ALTER DATABASE [IKU] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [IKU] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [IKU] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [IKU] SET QUERY_STORE = OFF
GO
USE [IKU]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [IKU]
GO
/****** Object:  Table [dbo].[LOGIN_IKU]    Script Date: 3/16/2018 7:18:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LOGIN_IKU](
	[ID] [int] NULL,
	[USERNAME] [nvarchar](max) NOT NULL,
	[PASSWORD] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[M_BANK]    Script Date: 3/16/2018 7:18:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M_BANK](
	[BANK_NO] [varchar](2) NULL,
	[DESCRIPTION] [varchar](50) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[M_IKU]    Script Date: 3/16/2018 7:18:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M_IKU](
	[NO_IKU] [varchar](2) NULL,
	[IKU_TYPE] [varchar](1) NULL,
	[DESCRIPTION] [varchar](50) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TRN_IKU_DT]    Script Date: 3/16/2018 7:18:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TRN_IKU_DT](
	[YEAR] [nvarchar](4) NULL,
	[NO_IKU] [varchar](2) NULL,
	[BANK] [numeric](3, 0) NULL,
	[TW1] [numeric](18, 3) NULL,
	[TW2] [numeric](18, 3) NULL,
	[TW3] [numeric](18, 3) NULL,
	[TW4] [numeric](18, 3) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TRN_IKU_HD]    Script Date: 3/16/2018 7:18:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TRN_IKU_HD](
	[YEAR] [nvarchar](4) NULL,
	[NO_IKU] [varchar](2) NULL,
	[INPUT] [numeric](1, 0) NULL,
	[REV] [numeric](1, 0) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TRN_IKU_HD_TARGET]    Script Date: 3/16/2018 7:18:46 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TRN_IKU_HD_TARGET](
	[YEAR] [nvarchar](4) NULL,
	[IKU_TYPE] [varchar](2) NULL,
	[PERCENTAGE] [numeric](7, 3) NULL,
	[DATE_CREATED] [datetime] NULL,
	[DATE_MODIFIED] [datetime] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[LOGIN_IKU] ([ID], [USERNAME], [PASSWORD]) VALUES (1, N'reja@gmail.com', N'reja')
INSERT [dbo].[M_BANK] ([BANK_NO], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'1', N'BANK BRI', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_BANK] ([BANK_NO], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2', N'BANK MANDIRI', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'1', N'1', N'Realisasi Kredit', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2', N'1', N'CAR', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'3', N'1', N'Kredit Produktif', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'4', N'1', N'Kredit Perikanan', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'5', N'1', N'Kredit Infrastruktur', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'6', N'1', N'Kredit Pertanian', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'7', N'1', N'Kredit Pariwisata', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'8', N'1', N'Bank Assurance', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'9', N'1', N'Aperd', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'10', N'1', N'Laku Pandai', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'11', N'1', N'KUR', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'12', N'1', N'Penyampaian KYFC & IRR', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'13', N'2', N'Temuan Pemeriksaan', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[M_IKU] ([NO_IKU], [IKU_TYPE], [DESCRIPTION], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'14', N'2', N'Permasalahan Strategis', CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_DT] ([YEAR], [NO_IKU], [BANK], [TW1], [TW2], [TW3], [TW4], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'1', CAST(1 AS Numeric(3, 0)), CAST(1033000.000 AS Numeric(18, 3)), CAST(1000000.000 AS Numeric(18, 3)), CAST(14330000.000 AS Numeric(18, 3)), CAST(10433000.000 AS Numeric(18, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_DT] ([YEAR], [NO_IKU], [BANK], [TW1], [TW2], [TW3], [TW4], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'2', CAST(2 AS Numeric(3, 0)), CAST(1000000.000 AS Numeric(18, 3)), CAST(1000000.000 AS Numeric(18, 3)), CAST(1000000.000 AS Numeric(18, 3)), CAST(1000000.000 AS Numeric(18, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_DT] ([YEAR], [NO_IKU], [BANK], [TW1], [TW2], [TW3], [TW4], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'1', CAST(2 AS Numeric(3, 0)), CAST(1001233.000 AS Numeric(18, 3)), CAST(1234342.000 AS Numeric(18, 3)), CAST(2312423.000 AS Numeric(18, 3)), CAST(12321321.000 AS Numeric(18, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_DT] ([YEAR], [NO_IKU], [BANK], [TW1], [TW2], [TW3], [TW4], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'2', CAST(1 AS Numeric(3, 0)), CAST(1232133.000 AS Numeric(18, 3)), CAST(3124423.000 AS Numeric(18, 3)), CAST(52312321.000 AS Numeric(18, 3)), CAST(32132133.000 AS Numeric(18, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_HD] ([YEAR], [NO_IKU], [INPUT], [REV], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'2', CAST(1 AS Numeric(1, 0)), CAST(0 AS Numeric(1, 0)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_HD_TARGET] ([YEAR], [IKU_TYPE], [PERCENTAGE], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'1', CAST(80.000 AS Numeric(7, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[TRN_IKU_HD_TARGET] ([YEAR], [IKU_TYPE], [PERCENTAGE], [DATE_CREATED], [DATE_MODIFIED]) VALUES (N'2017', N'2', CAST(80.000 AS Numeric(7, 3)), CAST(N'2017-01-01T00:00:00.000' AS DateTime), CAST(N'2017-01-01T00:00:00.000' AS DateTime))
USE [master]
GO
ALTER DATABASE [IKU] SET  READ_WRITE 
GO
